
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCeilingLight from "../../src/components/MdiCeilingLight.vue";

test("MdiCeilingLight snapshot", () => {
  const wrapper = mount(MdiCeilingLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
