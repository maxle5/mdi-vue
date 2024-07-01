
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTshirtCrew from "../../src/components/MdiTshirtCrew.vue";

test("MdiTshirtCrew snapshot", () => {
  const wrapper = mount(MdiTshirtCrew, {});
  expect(wrapper.html()).toMatchSnapshot();
});
