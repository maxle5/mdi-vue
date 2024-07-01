
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftOffice from "../../src/components/MdiMicrosoftOffice.vue";

test("MdiMicrosoftOffice snapshot", () => {
  const wrapper = mount(MdiMicrosoftOffice, {});
  expect(wrapper.html()).toMatchSnapshot();
});
