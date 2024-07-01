
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIcePop from "../../src/components/MdiIcePop.vue";

test("MdiIcePop snapshot", () => {
  const wrapper = mount(MdiIcePop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
