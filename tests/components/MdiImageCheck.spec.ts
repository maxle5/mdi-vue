
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageCheck from "../../src/components/MdiImageCheck.vue";

test("MdiImageCheck snapshot", () => {
  const wrapper = mount(MdiImageCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
