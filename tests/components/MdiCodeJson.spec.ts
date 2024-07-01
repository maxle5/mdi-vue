
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeJson from "../../src/components/MdiCodeJson.vue";

test("MdiCodeJson snapshot", () => {
  const wrapper = mount(MdiCodeJson, {});
  expect(wrapper.html()).toMatchSnapshot();
});
