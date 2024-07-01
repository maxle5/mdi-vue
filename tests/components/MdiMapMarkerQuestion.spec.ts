
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerQuestion from "../../src/components/MdiMapMarkerQuestion.vue";

test("MdiMapMarkerQuestion snapshot", () => {
  const wrapper = mount(MdiMapMarkerQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
