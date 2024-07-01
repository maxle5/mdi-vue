
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountDetails from "../../src/components/MdiAccountDetails.vue";

test("MdiAccountDetails snapshot", () => {
  const wrapper = mount(MdiAccountDetails, {});
  expect(wrapper.html()).toMatchSnapshot();
});
