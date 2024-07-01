
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDigitalOcean from "../../src/components/MdiDigitalOcean.vue";

test("MdiDigitalOcean snapshot", () => {
  const wrapper = mount(MdiDigitalOcean, {});
  expect(wrapper.html()).toMatchSnapshot();
});
