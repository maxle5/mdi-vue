
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDetails from "../../src/components/MdiDetails.vue";

test("MdiDetails snapshot", () => {
  const wrapper = mount(MdiDetails, {});
  expect(wrapper.html()).toMatchSnapshot();
});
