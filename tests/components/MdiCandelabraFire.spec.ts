
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandelabraFire from "../../src/components/MdiCandelabraFire.vue";

test("MdiCandelabraFire snapshot", () => {
  const wrapper = mount(MdiCandelabraFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
