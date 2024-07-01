
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogStopOutline from "../../src/components/MdiCogStopOutline.vue";

test("MdiCogStopOutline snapshot", () => {
  const wrapper = mount(MdiCogStopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
