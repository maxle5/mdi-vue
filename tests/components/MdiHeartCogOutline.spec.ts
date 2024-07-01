
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartCogOutline from "../../src/components/MdiHeartCogOutline.vue";

test("MdiHeartCogOutline snapshot", () => {
  const wrapper = mount(MdiHeartCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
