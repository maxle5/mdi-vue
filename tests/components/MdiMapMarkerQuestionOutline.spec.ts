
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerQuestionOutline from "../../src/components/MdiMapMarkerQuestionOutline.vue";

test("MdiMapMarkerQuestionOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
