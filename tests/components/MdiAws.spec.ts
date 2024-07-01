
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAws from "../../src/components/MdiAws.vue";

test("MdiAws snapshot", () => {
  const wrapper = mount(MdiAws, {});
  expect(wrapper.html()).toMatchSnapshot();
});
