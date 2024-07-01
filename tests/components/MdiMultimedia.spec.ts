
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMultimedia from "../../src/components/MdiMultimedia.vue";

test("MdiMultimedia snapshot", () => {
  const wrapper = mount(MdiMultimedia, {});
  expect(wrapper.html()).toMatchSnapshot();
});
