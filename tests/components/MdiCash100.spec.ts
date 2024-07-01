
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCash100 from "../../src/components/MdiCash100.vue";

test("MdiCash100 snapshot", () => {
  const wrapper = mount(MdiCash100, {});
  expect(wrapper.html()).toMatchSnapshot();
});
