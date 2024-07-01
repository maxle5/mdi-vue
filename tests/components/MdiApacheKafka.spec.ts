
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApacheKafka from "../../src/components/MdiApacheKafka.vue";

test("MdiApacheKafka snapshot", () => {
  const wrapper = mount(MdiApacheKafka, {});
  expect(wrapper.html()).toMatchSnapshot();
});
