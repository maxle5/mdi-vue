
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiParking from "../../src/components/MdiParking.vue";

test("MdiParking snapshot", () => {
  const wrapper = mount(MdiParking, {});
  expect(wrapper.html()).toMatchSnapshot();
});
