
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleFinder from "../../src/components/MdiAppleFinder.vue";

test("MdiAppleFinder snapshot", () => {
  const wrapper = mount(MdiAppleFinder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
