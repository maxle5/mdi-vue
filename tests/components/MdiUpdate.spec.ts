
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUpdate from "../../src/components/MdiUpdate.vue";

test("MdiUpdate snapshot", () => {
  const wrapper = mount(MdiUpdate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
