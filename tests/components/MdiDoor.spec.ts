
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoor from "../../src/components/MdiDoor.vue";

test("MdiDoor snapshot", () => {
  const wrapper = mount(MdiDoor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
