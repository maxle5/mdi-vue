
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConnection from "../../src/components/MdiConnection.vue";

test("MdiConnection snapshot", () => {
  const wrapper = mount(MdiConnection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
