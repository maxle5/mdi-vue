
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadCogOutline from "../../src/components/MdiHeadCogOutline.vue";

test("MdiHeadCogOutline snapshot", () => {
  const wrapper = mount(MdiHeadCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
