
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoctor from "../../src/components/MdiDoctor.vue";

test("MdiDoctor snapshot", () => {
  const wrapper = mount(MdiDoctor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
