
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIvBag from "../../src/components/MdiIvBag.vue";

test("MdiIvBag snapshot", () => {
  const wrapper = mount(MdiIvBag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
