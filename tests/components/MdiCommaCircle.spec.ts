
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommaCircle from "../../src/components/MdiCommaCircle.vue";

test("MdiCommaCircle snapshot", () => {
  const wrapper = mount(MdiCommaCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
