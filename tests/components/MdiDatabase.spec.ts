
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabase from "../../src/components/MdiDatabase.vue";

test("MdiDatabase snapshot", () => {
  const wrapper = mount(MdiDatabase, {});
  expect(wrapper.html()).toMatchSnapshot();
});
