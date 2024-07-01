
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStopCircleOutline from "../../src/components/MdiStopCircleOutline.vue";

test("MdiStopCircleOutline snapshot", () => {
  const wrapper = mount(MdiStopCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
