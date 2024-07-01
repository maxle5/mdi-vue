
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftWord from "../../src/components/MdiMicrosoftWord.vue";

test("MdiMicrosoftWord snapshot", () => {
  const wrapper = mount(MdiMicrosoftWord, {});
  expect(wrapper.html()).toMatchSnapshot();
});
