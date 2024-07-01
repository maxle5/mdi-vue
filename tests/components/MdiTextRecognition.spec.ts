
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextRecognition from "../../src/components/MdiTextRecognition.vue";

test("MdiTextRecognition snapshot", () => {
  const wrapper = mount(MdiTextRecognition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
