
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeModern from "../../src/components/MdiHomeModern.vue";

test("MdiHomeModern snapshot", () => {
  const wrapper = mount(MdiHomeModern, {});
  expect(wrapper.html()).toMatchSnapshot();
});
