
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnreal from "../../src/components/MdiUnreal.vue";

test("MdiUnreal snapshot", () => {
  const wrapper = mount(MdiUnreal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
