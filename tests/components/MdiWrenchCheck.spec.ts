
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchCheck from "../../src/components/MdiWrenchCheck.vue";

test("MdiWrenchCheck snapshot", () => {
  const wrapper = mount(MdiWrenchCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
