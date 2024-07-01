
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLectern from "../../src/components/MdiLectern.vue";

test("MdiLectern snapshot", () => {
  const wrapper = mount(MdiLectern, {});
  expect(wrapper.html()).toMatchSnapshot();
});
