
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftOnenote from "../../src/components/MdiMicrosoftOnenote.vue";

test("MdiMicrosoftOnenote snapshot", () => {
  const wrapper = mount(MdiMicrosoftOnenote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
