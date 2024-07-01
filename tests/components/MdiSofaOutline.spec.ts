
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSofaOutline from "../../src/components/MdiSofaOutline.vue";

test("MdiSofaOutline snapshot", () => {
  const wrapper = mount(MdiSofaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
