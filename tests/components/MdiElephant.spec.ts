
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElephant from "../../src/components/MdiElephant.vue";

test("MdiElephant snapshot", () => {
  const wrapper = mount(MdiElephant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
