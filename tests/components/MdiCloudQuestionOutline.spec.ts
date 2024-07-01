
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudQuestionOutline from "../../src/components/MdiCloudQuestionOutline.vue";

test("MdiCloudQuestionOutline snapshot", () => {
  const wrapper = mount(MdiCloudQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
