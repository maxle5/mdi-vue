
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStopCircle from "../../src/components/MdiStopCircle.vue";

test("MdiStopCircle snapshot", () => {
  const wrapper = mount(MdiStopCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
