
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudQuestion from "../../src/components/MdiCloudQuestion.vue";

test("MdiCloudQuestion snapshot", () => {
  const wrapper = mount(MdiCloudQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
