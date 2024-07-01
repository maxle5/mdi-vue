
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceRecognition from "../../src/components/MdiFaceRecognition.vue";

test("MdiFaceRecognition snapshot", () => {
  const wrapper = mount(MdiFaceRecognition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
