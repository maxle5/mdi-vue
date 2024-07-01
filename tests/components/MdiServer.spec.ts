
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServer from "../../src/components/MdiServer.vue";

test("MdiServer snapshot", () => {
  const wrapper = mount(MdiServer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
