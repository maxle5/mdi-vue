
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookAlphabet from "../../src/components/MdiBookAlphabet.vue";

test("MdiBookAlphabet snapshot", () => {
  const wrapper = mount(MdiBookAlphabet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
