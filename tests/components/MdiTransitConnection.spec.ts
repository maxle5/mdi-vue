
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitConnection from "../../src/components/MdiTransitConnection.vue";

test("MdiTransitConnection snapshot", () => {
  const wrapper = mount(MdiTransitConnection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
