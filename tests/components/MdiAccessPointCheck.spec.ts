
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointCheck from "../../src/components/MdiAccessPointCheck.vue";

test("MdiAccessPointCheck snapshot", () => {
  const wrapper = mount(MdiAccessPointCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
