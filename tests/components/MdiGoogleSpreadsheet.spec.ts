
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleSpreadsheet from "../../src/components/MdiGoogleSpreadsheet.vue";

test("MdiGoogleSpreadsheet snapshot", () => {
  const wrapper = mount(MdiGoogleSpreadsheet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
