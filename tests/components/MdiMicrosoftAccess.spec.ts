
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftAccess from "../../src/components/MdiMicrosoftAccess.vue";

test("MdiMicrosoftAccess snapshot", () => {
  const wrapper = mount(MdiMicrosoftAccess, {});
  expect(wrapper.html()).toMatchSnapshot();
});
