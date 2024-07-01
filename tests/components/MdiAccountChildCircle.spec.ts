
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountChildCircle from "../../src/components/MdiAccountChildCircle.vue";

test("MdiAccountChildCircle snapshot", () => {
  const wrapper = mount(MdiAccountChildCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
