
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountDetails from "../../src/components/MdiCardAccountDetails.vue";

test("MdiCardAccountDetails snapshot", () => {
  const wrapper = mount(MdiCardAccountDetails, {});
  expect(wrapper.html()).toMatchSnapshot();
});
