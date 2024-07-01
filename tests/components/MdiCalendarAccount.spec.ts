
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarAccount from "../../src/components/MdiCalendarAccount.vue";

test("MdiCalendarAccount snapshot", () => {
  const wrapper = mount(MdiCalendarAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
