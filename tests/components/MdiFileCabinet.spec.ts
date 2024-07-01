
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCabinet from "../../src/components/MdiFileCabinet.vue";

test("MdiFileCabinet snapshot", () => {
  const wrapper = mount(MdiFileCabinet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
