
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRocketOutline from "../../src/components/MdiRocketOutline.vue";

test("MdiRocketOutline snapshot", () => {
  const wrapper = mount(MdiRocketOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
