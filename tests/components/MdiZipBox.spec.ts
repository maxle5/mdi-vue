
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZipBox from "../../src/components/MdiZipBox.vue";

test("MdiZipBox snapshot", () => {
  const wrapper = mount(MdiZipBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
